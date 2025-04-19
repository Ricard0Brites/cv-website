import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from '../Components/Header/HeaderComponent';
import StandardTile from '../Components/Tiles/BaseTile';

import JSON from '../Data/TEST_ProfessionalInformation.json'

export default class ProfessionalExperience extends Component
{
    //#region Column Population
    ColumnReferences = [];
    GetColumnReferences(forceUpdate)
    {
      if(forceUpdate == true || this.ColumnReferences.length == 0)
      {
          this.ColumnReferences =
        [
        document.getElementById('Column-1'),
        document.getElementById('Column-2'),
        document.getElementById('Column-3')
        ];
      }
      return this.ColumnReferences;
    }

    AddTile(TileType, ...args)
    {
      switch (TileType) 
      {
        case 0: /* This is a standard size tile */
          const Col1Len = this.GetColumnReferences()[0].children.length;
          const Col2Len = this.GetColumnReferences()[2].children.length;

          if(Col1Len == Col2Len || Col2Len > Col1Len)
          {
            ReactDOM.createRoot(this.GetColumnReferences()[0]).render(<StandardTile {...args[0]} ></StandardTile>);
          }
          else if(Col1Len > Col2Len)
          {
            ReactDOM.createRoot(this.GetColumnReferences()[2]).render(<StandardTile {...args[0]} ></StandardTile>);
          }     
          break;
        
        case 1:
          ReactDOM.createRoot(this.GetColumnReferences()[1]).render(<LargeTile {...args[0]} ></LargeTile>);
          break;
        
        default:
          break;
      }
    }
    //#endregion

    //#region JSON Management
    NumOfStandardTiles = 0;
    NumOfLargeTiles = 0;

    GetJSON()
    {
        const JSONInfo = [];
        function MakeRoleInfoEntry(bulletName, subBullets) {
          return {
            BulletName: bulletName,
            SubBullets: subBullets
          };
        }

        function MakeJSONEntry(debugName, tileType, companyName, roleName, duration, companyLogo, roleInfo, companyWebsite, projectLink, colaborators, parentContainer) {
          return ({
            DebugName : debugName,
            TileType : tileType,
            CompanyName : companyName, 
            RoleName : roleName, 
            Duration : duration, 
            CompanyLogo : companyLogo, 
            RoleInfo : roleInfo, 
            CompanyWebsite : companyWebsite, 
            ProjectLink : projectLink, 
            Colaborators: colaborators,
            ParentContainer : parentContainer
          });
        }

        for(let element in JSON)
        {
          console.log('Fetching data for: %s', element);
      
      
          // Role Bullet Points
          const RoleBullets = [];
          for (let Bullet in JSON[element]["Role-Bullets"]) 
          {
            const SubBullets = JSON[element]["Role-Bullets"][Bullet];
            RoleBullets.push(MakeRoleInfoEntry(Bullet, SubBullets));
          }

          //Collaborators
          const Colaborators = [];
          for (let Colaborator of JSON[element]["Colaborators"]) 
          {
            Colaborators.push(Colaborator);
          }
      
          JSONInfo.push(MakeJSONEntry(
            element,
            JSON[element].TileType,
            JSON[element].CompanyName,
            JSON[element].RoleName,
            JSON[element].Duration,
            JSON[element].CompanyLogo,
            RoleBullets,
            JSON[element].CompanyWebsite,
            JSON[element].ProjectLink,
            Colaborators,
            null
          ));
        };
        return JSONInfo;
    };

    GetStandardTiles()
    {
        const TilesToReturn = [];

        for (let element of this.GetJSON())
        {
            if (element.TileType === 0) {
                TilesToReturn.push(element);
            }
        }

        console.log("Fetching Standard Tiles", TilesToReturn);
        return TilesToReturn;
    }

    GetLargeTiles()
    {
        const TilesToReturn = [];

        for (let element of this.GetJSON())
        {
            if (element.TileType === 1) {
                TilesToReturn.push(element);
            }
        }

        console.log("Fetching Large Tiles", TilesToReturn);
        return TilesToReturn;
    }
    //#endregion

    //#region React Framework Override
    componentDidMount()
    {
        this.GetJSON();

        const TilesList = [...this.GetStandardTiles(), ...this.GetLargeTiles()];

        for(let Tile of TilesList)
        {
          this.AddTile(Tile.TileType);
        }
    }

    render()
  {
    return (
      <div className="w-screen h-screen overflow-y-scroll scroll-smooth">
        
        {/* === PAGE 1 === */}
            <div className={`flex-col w-full h-[100%] snap-start`}>
          <Header />
          <div className="flex flex-1 w-full h-full">
            <div className="flex flex-1"></div> {/* Left Spacer */}

            <div id='Column-1' className="flex-2">{/* Col 1 */}</div>
            <div id='Column-2' className="flex-2">{/* Col 2 */}</div>
            <div id='Column-3' className="flex-2">{/* Col 3 */}</div>


            <div className="flex flex-1"></div> {/* Right Spacer */}
          </div>
        </div>
      </div>
    );
  }
    //#endregion
}

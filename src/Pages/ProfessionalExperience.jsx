import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import Header from '../Components/Header/HeaderComponent';
import StandardTile from '../Components/Tiles/BaseTile';
import ExperienceDetails from '../Components/ExperienceDetails/ExperienceDetails'

import JSON from '../Data/TEST_ProfessionalInformation.json'

import '../index.css'

export default class ProfessionalExperience extends Component
{
    ContentRoot = null;
    HiddenContent = []; // innerHTML to make it easy & light to add and remove

    state = {
      showOverlay: false,
      overlayContent: null,
    };

    openOverlay = (Content) => {
      this.setState({showOverlay: true, overlayContent: Content})
    
      if(this.ContentRoot)
      {
        this.HiddenContent = this.ContentRoot.innerHTML; // cache element to display after closing the overlay
        this.ContentRoot.innerHTML = ''; // hide element
      }

      ReactDOM.createRoot(this.ContentRoot).render
      (
        <ExperienceDetails JSONObject={Content}></ExperienceDetails>
      );
    };

    closeOverlay = () => {
      this.setState({showOverlay: false, overlayContent: null})
    };

    ElementKeys = 0;
    //#region Column Population
    ColumnReferences = [];
    GetColumnReferences(forceUpdate)
    {
      if(forceUpdate == true || this.ColumnReferences.length == 0)
      {
          this.ColumnReferences =
        [
          {  
            Entries : 0,
            Root : ReactDOM.createRoot(document.getElementById('Column-1')),
            Content : []
          },
          {  
            Entries : 0,
            Root : ReactDOM.createRoot(document.getElementById('Column-2')),
            Content : []
          },
          {  
            Entries : 0,
            Root : ReactDOM.createRoot(document.getElementById('Column-3')),
            Content : []
          }
        ];
      }
      return this.ColumnReferences;
    }

    AddTile(JSONObject)
    {
      switch (JSONObject.TileType) 
      {
        case 0: /* This is a standard size tile */
          const Col1Len = this.GetColumnReferences()[0].Entries;
          const Col2Len = this.GetColumnReferences()[2].Entries;

          if(Col1Len == Col2Len || Col2Len > Col1Len)
          {
            //Adds to the first Standard Column
            this.GetColumnReferences()[0].Content.push(
            <StandardTile 
              key={this.ElementKeys++}
              JSONObject={JSONObject} 
              OnClick={() => {this.openOverlay(JSONObject)}}>
            </StandardTile>);
            this.GetColumnReferences()[0].Entries++;
          }
          else if(Col1Len > Col2Len)
          {
            // Adds to the second standard column (third in the layout)
            this.GetColumnReferences()[2].Content.push(<StandardTile key={this.ElementKeys++} JSONObject={JSONObject} OnClick={() => {this.openOverlay(JSONObject)}}></StandardTile>);
            this.GetColumnReferences()[2].Entries++;
          }     
          break;
        
        case 1:
          //Adds to the Middle Column (TODO later, this logic is only here to be completed when there are too many entries to display in 2 columns... large tile type doesnt exist ATM)
          this.GetColumnReferences()[1].Content.push(<LargeTile key={this.ElementKeys++} JSONObject={JSONObject} OnClick={() => {this.openOverlay(JSONObject)}}></LargeTile>);
          this.GetColumnReferences()[1].Entries++;
          break;
        
        default:
          break;
      }
    }

    RenderTiles()
    {
      for(let Col of this.ColumnReferences)
      {
        Col.Root.render(Col.Content)
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
      this.ContentRoot = document.getElementById('content-root');

      const TilesList = [...this.GetStandardTiles(), ...this.GetLargeTiles()];

      for(let Tile of TilesList)
      {
        this.AddTile(Tile);
      }
      this.RenderTiles();
    }

    render()
  {
    return (
      <div className="w-screen h-screen overflow-y-scroll scroll-smooth">
            <div className={`flex-col w-full h-[100%] snap-start`}>
          <Header />
          <div id='content-root' className="flex flex-1 w-full h-full">
            <div className="flex flex-1"></div> {/* Left Spacer */}

            <div id='Column-1' className="flex-2">{/* Col 1 */}</div>
            <div id='Column-2' className="flex-1">{/* Col 2 */}</div>
            <div id='Column-3' className="flex-2">{/* Col 3 */}</div>

            <div className="flex flex-1"></div> {/* Right Spacer */}
          </div>
        </div>
      </div>
    );
  }
    //#endregion
}

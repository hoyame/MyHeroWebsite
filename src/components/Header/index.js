import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';


const HeaderComponent = () => {
    const history = useHistory();

    return (
        <div className="header">
          <img onClick={() => history.push("/")} className="logo" src="https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"></img>

          <div className="header-buttons">
            <div onClick={() => history.push("/cgu")} className="header-button">C.G.U</div>
            <div onClick={() => history.push("/download")} className="header-button">Download</div>
          </div>
        </div>
    );
}

export default HeaderComponent;
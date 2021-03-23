import React, { useState } from 'react';
import HeaderComponent from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {AlertList} from '../../App';
import './style.css';

  
const myHeaders = new Headers();

const AdminView = () => {
    const [state, setState] = useState([])

    setTimeout(() => {
        setState(AlertList)
    }, 5000)

    function DeleteAlert({ identifier, level, source, latitude, longitude, description }) {
        var params = {
            identifier: identifier,
            level: level,
            source: source,
            latitude: latitude,
            longitude: longitude,
            description: description
        }

        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    
        fetch(`http://146.59.227.90:3333/alerts/remove`, req)
            .then(function(res) {
                console.log(res);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
        ;
    }

    const AlertProps = ({ id, identifier, description, level, source, latitude, longitude }) => {
        return (
            <div className="alert-box">
                <p>{id}</p>
                <p>{identifier}</p>
                <p>{description}</p>
                <p>{level}</p>
                <FontAwesomeIcon fill="#F05038" className="alert-icon" style={{
                    marginTop: 16,
                    marginLeft: 25,
                    height: 25,
                    width: 25
                }} icon={faTimes} onClick={() => {
                    DeleteAlert({ identifier, level, source, latitude, longitude, description })
                }} />
            </div>
        );
    }

    const returnAlerts = () => {
        return state.map((v, k) => {
            return <AlertProps key={k} {...v} />
        })
    }   

    return (
        <>  
            <div className="">
                <HeaderComponent />

                <div className="alerts">
                    <h2>Listes des alertes</h2>

                    <div className="alert-box-t">
                        <p>ID</p>
                        <p>Createur</p>
                        <p>Description</p>
                        <p>Niveau</p>
                        <p>Supprimer</p>
                    </div>

                    {returnAlerts()}
                </div>
            </div>
        </>
    );
}

export default AdminView;
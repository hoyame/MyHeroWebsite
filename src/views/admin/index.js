import React, { useState } from 'react';
import HeaderComponent from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {AlertList, InformationsH24, InformationsH24AV} from '../../App';
import './style.css';

  
const myHeaders = new Headers();

const AdminView = () => {
    const [state, setState] = useState([])
    const [news, setNews] = useState([])
    const [news1, setNews1] = useState([])

    setTimeout(() => {
        setState(AlertList)
        setNews(InformationsH24)
        setNews1(InformationsH24AV)
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

    const NewsProps = ({ name, rate, description, latitude, longitude }) => {
        return (
            <div className="alert-box">
                <p>0</p>
                <p>{name}</p>
                <p>{description}</p>

                <FontAwesomeIcon fill="#2bb969" className="alert-icon-t" style={{
                    marginTop: 16,
                    marginLeft: 25,
                    height: 25,
                    width: 25
                }} icon={faCheck} onClick={() => {
                    var params = {
                        name: name,
                        rate: rate,
                        description: description,
                        latitude: latitude, 
                        longitude: longitude
                    }
            
                    let req = {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(params),
                    }
                
                    fetch(`http://146.59.227.90:3333/list/approvate`, req)
                        .then(function(res) {
                            console.log(res);
                        })
            
                        .catch(function(err) {
                            console.log("errror", err)
                        })
                    ;
                }} />

                <FontAwesomeIcon fill="#F05038" className="alert-icon" style={{
                    marginTop: 16,
                    marginLeft: 25,
                    height: 25,
                    width: 25
                }} icon={faTimes} onClick={() => {
                    var params = {
                        name: name,
                        rate: rate,
                        description: description,
                        latitude: latitude, 
                        longitude: longitude
                    }
            
                    let req = {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(params),
                    }
                
                    fetch(`http://146.59.227.90:3333/list/delete`, req)
                        .then(function(res) {
                            console.log(res);
                        })
            
                        .catch(function(err) {
                            console.log("errror", err)
                        })
                    ;
                }} />

            </div>
        );
    }

    const News1Props = ({ name, rate, description, latitude, longitude }) => {
        return (
            <div className="alert-box">
                <p>0</p>
                <p>{name}</p>
                <p>{description}</p>
                <FontAwesomeIcon fill="#F05038" className="alert-icon" style={{
                    marginTop: 16,
                    marginLeft: 25,
                    height: 25,
                    width: 25
                }} icon={faBan} />

                <FontAwesomeIcon fill="#F05038" className="alert-icon" style={{
                    marginTop: 16,
                    marginLeft: 25,
                    height: 25,
                    width: 25
                }} icon={faBan} />
            </div>
        );
    }

    const returnAlerts = () => {
        return state.map((v, k) => {
            return <AlertProps key={k} {...v} />
        })
    }   

    const returnNews = () => {
        return news.map((v, k) => {
            return <NewsProps key={k} {...v} />
        })
    }

    const returnNews1 = () => {
        return news1.map((v, k) => {
            return <News1Props key={k} {...v} />
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

                <div className="alerts">
                    <h2>Listes des news a traiter</h2>

                    <div className="alert-box-t">
                        <p>ID</p>
                        <p>Createur</p>
                        <p>Description</p>
                        <p>Approuver</p>
                        <p>Supprimer</p>
                    </div>

                    {returnNews()}
                </div>

                <div className="alerts">
                    <h2>Listes des news traitées</h2>

                    <div className="alert-box-t">
                        <p>ID</p>
                        <p>Createur</p>
                        <p>Description</p>
                        <p>Approuver</p>
                        <p>Supprimer</p>
                    </div>

                    {returnNews1()}
                </div>
            </div>
        </>
    );
}

export default AdminView;
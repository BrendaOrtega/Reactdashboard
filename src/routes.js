import React from 'react';
import HomePage from './components/home/HomePage';
import Seguros from './components/servicios/seguros/Seguros';
import Afore from './components/servicios/afore/Afore';
import Banco from './components/servicios/banco/Banco';
import Creditos from './components/servicios/creditos/Creditos';
import Salud from './components/servicios/salud/Salud';
import Extras from './components/servicios/extras/Extras';
import Contacto from './components/contacto/Contacto';
import FormContacto from './components/formcontacto/FormContacto';
import Invitacion from './components/invitacion/Invitacion';
import {
  Switch,
  Route
} from 'react-router-dom';


import Integrate from './components/integrate/Integrate';



const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/seguros' component={Seguros}/>
      <Route path='/afore' component={Afore}/>
      <Route path='/banco' component={Banco}/>
      <Route path='/credito' component={Creditos}/>
      <Route path='/gastos' component={Salud}/>
      <Route path='/extras' component={Extras}/>
      <Route path='/contacto' component={Contacto}/>
      <Route path='/form' component={FormContacto}/>
      <Route path='/integrate' component={Integrate}/>
      <Route path='/app' component={Invitacion}/>

    </Switch>
);

export default Routes;

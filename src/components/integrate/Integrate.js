import React, { Component } from 'react';
import './Integrate.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import FontAwesome from 'react-fontawesome';


class Integrate extends Component{
	render (){
		return(
			<div className=''>
				<div className='barra'>
					<Nav history={this.props.history} />
				</div>
				<h2>INTEGRATE COMO ASESOR FINANCIERO</h2>

				<div className='img_asesor'>

				</div>


				<div className='flex'>
					<div className='text_asesor'>
						<p>Los asesores financieros pueden ser personas
							"Físicas con actividad empresarial" o "Personas
							Morales" que firman contrato con alguna de las
							Unidades de Negocio de Grupo Financiero Inbursa
							(SEGUROS, BANCO,AFORE, CASA DE BOLSA) para
							comercializar sus productos y servicios.</p>
						<p>Dentro de sus principales funciones son las siguientes:
							<br />
							<br />
							Prospección de Clientes.
							<br />
							Identificación de necesidades financieras.
							<br />
							Colocación de productos de Grupo Financiero Inbursa.
							<br/>
							Asesoría y Servicio Post-venta.
						</p>

					</div>


					<div className='text_asesor'>

						<h3>¿Por qué trabajar como Asesor Financiero?</h3>
						<p>Porque te ofrecemos:
							Contratación directa con Grupo Financiero Inbursa.
							Capacitación Técnica, Administrativa y Humana.
							Claves de Asesor Financiero con validez oficial ante la Comisión Nacional de Seguros y Fianzas (CNSF) y Comisión Nacional de Sistemas de Ahorro para el Retiro (CONSAR), sin costo.
							Horario flexible y de acuerdo a tus necesidades.
							EXCELENTE ESQUEMA DE COMISIONES Y BONOS POR PRODUCCION.
							Convenciones nacionales e internacionales.
							Desarrollo profesional y crecimiento dentro de nuestra fuerza de ventas.</p>
					</div>
				</div>
				<h3>¡CUMPLE CON TUS EXPECTATIVAS ECONÓMICAS! Y TENER UNA CALIDAD DE VIDA.</h3>

				<div className="box_rect">
					<div className="rect_bar">
						<p>
						<FontAwesome name='line-chart' size='2x'/></p>
						1. Aumenta tu capital
						<p>Con DIPRA aumentarán sus ventas de manera significativa, ya que nuestros servicios
							le permiten enfocar sus esfuerzos en lo que es realmente importante, vender.</p>
					</div>
					<div className="rect_bar">
						<p>
							<FontAwesome name='id-card-o' size='2x'/></p>
						2. Obtén ingreso anuales
						<p>Nuestro modelo de comisiones y bonos te permite obtener ingresos anuales de forma permanente</p>
					</div>
					<div className="rect_bar">
						<p>
							<FontAwesome name='handshake-o' size='2x'/></p>
						3. Haz equipo con DIPRA
						<p>
							Crea sinergias comerciales y de negocio, haciedo uso de las herramientas que DIPRA te ofrece para potencializar las ventas.
						</p>
					</div>
				</div>
				<div className="indications">
				<div className='form_asesor'>
					<h3>Solicita información de forma inmediata:</h3>
					<form method="post" action="." className='recuadros' name="sentMessage" id="contactForm">
						<div className="form_cuadro">
						<input name="nombre" type="name" className="inp form-ct" placeholder=" Nombre" id="nombre" required data-validation-required-message="Please enter your email address." />
				        <p className="help-block text-danger"></p>
				        <input name="telefono" type="name" className="inp form-ctl" placeholder="Teléfono" id="nombre" required data-validation-required-message="Please enter your email address." />
				        <p className="help-block text-danger"></p>
							<input name="email" type="name" className="inp form-ctl" placeholder="Email" id="email" required data-validation-required-message="Please enter your email address." />
							<p className="help-block text-danger"></p>



						</div>
						<div className="form_cuadro">
							<textarea placeholder="Mensaje" className="tx_area form_ct">

							</textarea>
						</div>
					</form>
				</div>
					<button className="send">Enviar</button></div>
				<Footer />
			</div>
		);
	}
}

export default Integrate;
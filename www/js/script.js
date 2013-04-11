/* JS Document
 * coded by Giovanni Iacuzzo
 */

/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// --- global vars
	var jContent = {},
		boolLeftMenu = false,
		menuDir = 'left';

	// --- methods
	var drawContent = function(){

		//System solaire
		jContent.solarSystem = [];
			
			//Soleil
			jContent.solarSystem['soleil'] = {};
				
				//infos
				jContent.solarSystem['soleil'].infos = 'Le Soleil forme le cœur du Système solaire, dont il est la seule source de lumière visible. Il s’agit en fait d’une énorme boule de gaz chaud, avec 5500°C en surface et 15 millions de degrés au cœur. Au centre du Soleil, la pression et la température sont si fortes que se produisent des réactions de fusion nucléaire : le Soleil convertit l’hydrogène en hélium, ce qui produit de l’énergie que nous recevons sous forme de lumière. Ces réactions consomment 600 millions de tonnes d’hydrogène par seconde. Il arrivera un moment où le « combustible » hydrogène sera épuisé : le Soleil se dirigera alors vers sa fin… Il commencera par grossir puis son cœur s’effondrera tandis que ses couches extérieures seront éjectées. Cela n’est pas pour tout de suite : le Soleil est né avec l’ensemble du Système solaire il y a environ 4 milliards et demi d’années, et il vivra encore au moins autant.'; 

				//missions
				jContent.solarSystem['soleil'].missions = [
														  	{'nom':'SoHO', 'lien':'http://soho.nascom.nasa.gov/'},
														  	{'nom':'Hessi', 'lien':'http://hesperia.gsfc.nasa.gov/'},
														  	{'nom':'Solar B/Hinode', 'lien':'http://www.nasa.gov/mission_pages/hinode/index.html'},
														  	{'nom':'Stereo A et B', 'lien':'http://stereo.gsfc.nasa.gov/'},
														  	{'nom':'SDO', 'lien':'http://sdo.gsfc.nasa.gov/'},
														  	{'nom':'Picard', 'lien':'http://smsc.cnes.fr/PICARD/Fr/'},
														  	{'nom':'Solar Orbiter', 'lien':'http://sci.esa.int/solarorbiter/'}
														  ];
				//En savoir plus
				jContent.solarSystem['soleil'].plus = 'http://www.ago.ulg.ac.be/PeM/News/sch_f.php';

				//Photos
				jContent.solarSystem['soleil'].photos = [
														  	'https://commons.wikimedia.org/wiki/File:Planets_and_sun_size_comparison.jpg',
														  	'http://www.flickr.com/photos/gsfc/7936905134/in/photostream',
														  	'http://soho.nascom.nasa.gov/gallery/bestofsoho.html'
														];

				//Expérience
				jContent.solarSystem['soleil'].experience = {
																'texte': 'Construisez une Terre miniature en plantant la boule sur la tige. Notez « pôle Nord » la fixation supérieure de la tige et « pôle Sud » la fixation inférieure. Entre les deux pôles, tracez une ligne séparant la sphère en deux moitiés égales : c’est l’équateur. À mi-chemin entre l’équateur et le pôle Nord, tracez une petite croix qui indique la position de l’Europe sur la Terre. Dans un local sombre, éclairez la Terre ainsi construite avec la lampe, qui servira de Soleil.', 
																'observation': 'Lorsque la Terre tourne sur son axe-tige, la croix-repère passe alternativement du côté sombre au côté clair. Lorsqu’il est du côté sombre, le corps de la Terre lui empêche de voir le Soleil : il fait nuit. Lorsqu’il est du côté éclairé, le Soleil est visible sans problème : c’est le jour.', 
																'conclusion': 'La rotation de la Terre est responsable de l’alternance jour-nuit.'
															};
	};

	var showHideLeftMenu = function(e){
		e.preventDefault();
		console.log('coucou');
		var dir;
		if(boolLeftMenu){
			dir = '-';
			menuDir = 'left';
			boolLeftMenu = false;
		}else{
			dir = '+'
			menuDir = 'right';
			boolLeftMenu = true;
		}
		$('#topNav').animate({
					    left: dir+'=275px'
					  }, 500);
		$('#sideMenu').animate({
					    left: dir+'=275px'
					  }, 500);
		$('#content').animate({
					    left: dir+'=275px'
					  }, 500);	
	};

	var swipeMenu = function(e){
		e.gesture.preventDefault();
		var dir;
		if(e.gesture.direction == 'right'){
			if(menuDir != 'right'){
				dir = '+';
				boolLeftMenu = true;
				$('#topNav').animate({
					    left: dir+'=275px'
					  }, 500);
				$('#sideMenu').animate({
					    left: dir+'=275px'
					  }, 500);
				$('#content').animate({
					    left: dir+'=275px'
					  }, 500);
				menuDir = 'right';
			}
		}else{
			if(menuDir != 'left'){
				dir = '-';
				boolLeftMenu = false;
				$('#topNav').animate({
					    left: dir+'=275px'
					  }, 500);
				$('#sideMenu').animate({
					    left: dir+'=275px'
					  }, 500);
				$('#content').animate({
					    left: dir+'=275px'
					  }, 500); 
				menuDir = 'left';
			}
		}
	};

	var stopOverflow = function(e){
		e.gesture.preventDefault();
	};

	// --- onload routines
	var onDeviceReady = function(e){
		//la premiere fonction a faire avant tout pour avoir le contenu
		drawContent();
		$(window).hammer().on('swipe', swipeMenu);
		$(window).hammer().on('drag', stopOverflow);
		$('.button-top-bar-menu').on('click', showHideLeftMenu);
	};

	$( function () {
		document.addEventListener("deviceready", onDeviceReady, false);
	} );

}( jQuery ) );
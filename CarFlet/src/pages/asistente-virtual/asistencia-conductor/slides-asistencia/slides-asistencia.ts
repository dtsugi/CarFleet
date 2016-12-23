import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'slides-asistencia.html'
})
export class SlidesAsistenciaPage {
    titlePage = "";
    slidesPrimerosAuxilios = [
        {
            title: "Conservar la calma",
            description: "No perder los nervios es basico para poder actuar",
            image: "assets/img/AsistenciaConductor_I_Img_I.png"
        },
        {
            title: "Avisar al personal sanitario",
            description: "Este consejo o recomendaciones se traduce como la necesidad de pedir ayuda con rapidez, a fin de establecer un tratamiento médico lo antes posible.",
            image: "assets/img/AsistenciaConductor_I_Img_II.jpg"
        },
        {
            title: "Tranquilizar al Herido",
            description: "Los accidentados suelen estar asustados, desconocen las lesiones que sufren y necesitan a alguien en quien confiar en esos momentos de angustia",
            image: "assets/img/AsistenciaConductor_I_Img_III.jpg"
        }
    ];

    slidesCasoDeAccidente = [
        {
            title: "Signos vitales",
            description: "Estas son las señales que indican la presencia de vida. Cuenta los latidos, las pulsaciones y las respiraciones en 30 o 20 segundos y multiplica por tres, de esta forma obtienes el total de respuestas por minuto",
            image: "assets/img/AsistenciaConductor_II_Img_I.jpg"
        },
        {
            title: "Asegure su integridad fisica",
            description: "para proporcionar una buena ayuda es fundamental estar libre de riesgos. Por ello, es importante que evalues la escena donde ocurrira el accidente. De esta forma garantizas tu propia seguridad fi­sica y la de los demas",
            image: "assets/img/AsistenciaConductor_II_Img_II.jpg"
        },
        {
            title: "Avisar al personal sanitario",
            description: "Este consejo o recomendaciones se traduce como la necesidad de pedir ayuda con rapidez, a fin de establecer un tratamiento medico lo antes posible.",
            image: "assets/img/AsistenciaConductor_II_Img_III.jpg"
        }
    ];

    currentSlides = [];

    constructor(public params: NavParams) {
    }

    ngOnInit() {
        this.setCurrentSlide(this.params.get("slideSelected"));
    }

    setCurrentSlide(selectedSlideIn) {
        console.log(selectedSlideIn);
        switch (selectedSlideIn) {
            case 0:
                this.titlePage = "Primeros auxilios";
                this.currentSlides = this.slidesPrimerosAuxilios;
                break;
            case 1:
                this.titlePage = "Actuación en caso de accidente";
                this.currentSlides = this.slidesCasoDeAccidente;
                break;
        }
    }
}
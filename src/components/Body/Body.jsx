import Card from "../Card/Card";
import "./View.css";
import body from "../../Images/User.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Color() {
  let cards = [];
  const spanishInfo = [
    "Rodilla",
    "Cráneo",
    "Cabeza",
    "Pierna",
    "Nuca",
    "Ano",
    "Mano",
    "Uña",
    "Cabello",
    "Puño - Muñeca",
    "Dientes",
    "Boca",
    "Dedo",
    "Pie",
    "Hombro",
    "Oreja",
    "Vulva",
    "Barriga",
    "Vientre",
    "Nariz",
    "Ombligo",
    "Pechos",
    "Cara",
    "Ojos",
    "Pestañas",
    "Talón",
    "Espalda - Omoplato",
    "Codo",
  ];

  const kankuamoInfo = [
    "Bukúhköna",
    "Chakna",
    "Chakuku",
    "Dukakána",
    "Ganakusha",
    "Ghükkú",
    "Güna",
    "Gunakhöna",
    "Ihangöne",
    "Kogöna",
    "Köhka",
    "Kohkába",
    "Kóma/komadina",
    "kösa",
    "Kuchikanaba",
    "Kukkuá",
    "Küku",
    "Kumáne",
    "Kümona",
    "Michuluña",
    "Möna",
    "Tutu",
    "Ubatára",
    "Uhma",
    "Umasángala",
    "Urúchi",
    "Yanahtáma",
    "Zinzinkana",
  ];

  const englishInfo = [
    "Knee",
    "Skull",
    "Head",
    "Leg",
    "Nuca",
    "Anus",
    "Hand",
    "Nail",
    "Hair",
    "Fist - Wrist",
    "Teeth",
    "mouth",
    "Finger",
    "Cake",
    "Shoulder",
    "Ear",
    "Vulva",
    "Belly",
    "Belly",
    "Nose",
    "Navel",
    "Breasts",
    "Face",
    "Eyes",
    "Eyelashes",
    "Heel",
    "Back - Shoulder Blade",
    "Elbow",
  ];

  for (let i = 0; i < 28; i++) {
    cards.push(
      <Card
        data={body}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
        styleInfo={{ visibility: "visible", position: "between" }}
      />
    );
  }
  return (
    <>
      <Header />
      {/* Titulo de la vista  */}
      <h1 className="mt-auto Categoria">PARTES DEL CUERPO</h1>

      {/*Cartas de colores*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
      <Footer />
    </>
  );
}

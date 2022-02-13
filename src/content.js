import React from "react";


window.name ="Lata Mangeshkar Ji ";
class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <h2>A Short Biography of {window.name}</h2>
                <ul className="list">
                    <li>{window.name} was born on September 28, 1929 in Indore district, India</li>
                    <li>She received her first music lesson from her father. At the age of five, she started to work as an actress in her father's musical plays</li>
                    <li>She sang the song "Naachu Yaa Gade, Khelu Saari Mani Haus Bhaari", which was composed by Sadashivrao Nevrekar for Vasant Joglekar's Marathi movie Kiti Hasaal </li> 
                    <li>She made her Kannada debut in 1967 for the film Kranthiveera Sangolli Rayanna by recording two songs for the music director Lakshman Berlekar.[60] The song "Bellane Belagayithu" was well received and appreciated</li>
                    <li>In the 1960s, she recorded duets with Kishore Kumar, Mukesh, Manna Dey, Mahendra Kapoor and Mohammed Rafi. For a brief period during the 1960s</li>
                    <li>From the 1980s onward, Mangeshkar worked with music directors such as Shiv-Hari in Silsila (1981), Faasle (1985), Vijay (1988), and Chandni (1989) and Ram Laxman in Ustadi Ustad Se (1981), Bezubaan (1982)</li>
                    <li>Rajesh Roshan's collaboration with Dev Anand in Lootmaar and Man Pasand resulted in songs such as "Paas Ho Tum Magar Qareeb" and "Sumansudha Rajni Chandha" respectively. Lata had duets with Rafi such as "Mujhe Chhoo Rahi Hain" in Swayamwar (1980)</li>
                    <li>During the 1990s, Mangeshkar recorded with music directors including Anand–Milind, Nadeem-Shravan, Jatin–Lalit, Dilip Sen-Sameer Sen, Uttam Singh, Anu Malik, Aadesh Shrivastava and A. R. Rahman. </li>
                    <li>In the same year, she established the Master Deenanath Mangeshkar Hospital in Pune, managed by the Lata Mangeshkar Medical Foundation (founded by the Mangeshkar family in October 1989).</li>
                    <li>Mangeshkar died from multiple organ dysfunction syndrome on 6 February 2022, at the age of 92. She had undergone 28 days of constant treatment for pneumonia and COVID-19</li>
                </ul>
            </div>
        );
    }
}
export default Content;
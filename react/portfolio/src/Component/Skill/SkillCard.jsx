import React from 'react';
import PropTypes from 'prop-types';
import './SkillCard.scss';
import MakeAwesome from '../MakeAwesome/MakeAwesome';

const SkillCard = (props) => {

    const webCard = ['JavaScript', 'HTML5', 'CSS3', 'ES2015', 'NodeJS', 'ReactJS', 'REST API', 'JWT Auth', 'JSON', 'Animation', 'Database', 'Responsive Design', 'WebStorm', 'Visual Studio Code'];
    const uixCard=['Wireframe', 'Mockup', 'Figma', 'Bootstrap', 'Material UI', 'Tailwind', 'Material Design 3', 'Compose'];
    const dataCard=['MySQL', 'MongoDB', 'Firebase', 'DynamoDB'];
    const androidCard=['Java', 'Kotlin', 'MVC', 'XML', 'Material Design 3', 'Jetpack Compose', 'Android Studio'];
    const languageCard=['JavaScript', 'Java', 'Kotlin', 'Python', 'C++', 'C#'];

    const skillCardObj={
        webCard,
        uixCard,
        dataCard,
        androidCard,
        languageCard
    }

    const skillCardArr = Object.entries(skillCardObj);

    return (
        <div className="mainContainer">
            <div className="skillContainer underline-animation">
                <div>SKILLS</div>
            </div>
            {skillCardArr.map((card, index) => (
                <div key={index} className="skillCard" id={card[0]}>
                    <div className="face face1">
                        <div className={`content ${card[0]}-content`}>
                            {card[1].map((skill, index) => {
                                return <div key={index} className="text">{skill}</div>
                            })}
                        </div>
                </div>
                <div className={`face face2 ${card[0]}-face`}>
                    <div className="cardHead">{card[0].replace("Card", "").toUpperCase()}</div>
                </div>
            </div>
            ))}
            <div className='makeAwesome'><MakeAwesome /></div>

        </div>
    );
};

SkillCard.propTypes = {

};

export default SkillCard;

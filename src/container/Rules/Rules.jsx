import React from "react";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";

import './Rules.css';

const RuleCard = ( {rule: { icon, title, comment}} ) => (
    <div className='app__rules_list-card'>
      <div className='icon'>{icon}</div>
      <div className='app__rules_list-card_content'>
        <p className='p__cormorant' style={{color: 'var(--color-accent)'}}>{title}</p>
        <p className='p__opensans'>{comment}</p>
      </div>
    </div>
  );

const Rules = () => (
    <div className='app__bg app__wrapper section__padding' id='rules'>

        <div className='app__wrapper_info'>
            <SubHeading title="New rules"/>
            <h1 className='headtext__cormorant'>Rules and regulations</h1>

            <div className='app__rules_list'>
                {data.rules.map((rule) => <RuleCard rule={rule} key={rule.title}/>)};
            </div>
        </div>

        <div className='app__wrapper_img'>
            <img src={images.outdoor} alt="rules" />
        </div>

    </div>
);

export default Rules;
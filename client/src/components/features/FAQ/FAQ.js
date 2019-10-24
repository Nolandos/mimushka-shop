import React from 'react';
import { ExtensionPannel } from '../../index';
import faqList from './FAQContent';

const FAQ = () =>{ 
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className="faq">
            <h1 className="faq__title">FAQ</h1>
            <div className="faq_container">
                { faqList.map(faq =>( 
                        <ExtensionPannel 
                            key={faq.id} 
                            {...faq} 
                            handleChange={handleChange} 
                            expanded={expanded}/>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default FAQ;
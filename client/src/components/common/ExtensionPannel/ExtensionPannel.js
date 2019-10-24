import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ExtensionPannel.scss';

const ExtensionPannel = ({question, answer, id, expanded, handleChange }) => {
 
  return (
    <ExpansionPanel expanded={expanded === id } onChange={handleChange(id)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{ question }</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            { answer }
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default ExtensionPannel;
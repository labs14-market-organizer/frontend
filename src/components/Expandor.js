import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Expandor(props) {
    const [expanded, setExpanded] = React.useState(false);
    console.log(props.children)
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    if(!props || !props.children || props.children.length < 1) {console.log("error");return <div/>}
    let b = (x,i) => {
        return(
        <ExpansionPanel expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography >{x.props.children && x.props.children.length > 0 ? x.props.children[0] : ""}</Typography>
            <Typography style={{marginLeft: "50px", fontSize: "0.8rem", lineHeight: "1.5rem", fontWeight: "300"}} >{x.props.children && x.props.children.length > 1 ? x.props.children[1] : ""}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                {x.props.children && x.props.children.length > 2 ? x.props.children[2] : ""}
            </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        )
    }
    let a = () => 
    {
        try 
        {
            return props.children.map(b)
        }
        catch { return b(props.children, 1)}
    }
    return (
      <div>
        {a()}
      </div>
      
    );
  }
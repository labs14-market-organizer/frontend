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
        <ExpansionPanel expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)} style={{margin: "0 2vw", width: "95vw", maxWidth: props._width ? props._width : "95vw"}}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography >{x.props.children && x.props.children.length > 0 && expanded !== `panel${i+1}` ? x.props.children[0] : <div style={{marginRight: "2vw"}}/>}</Typography>
            <Typography style={{marginLeft: expanded !== `panel${i+1}` ? "50px" : "0", fontSize: "0.8rem", lineHeight: "1.5rem", fontWeight: "300", transition: "margin 0.3s linear"}} >{x.props.children && x.props.children.length > 1 ? x.props.children[1] : ""}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{opacity: expanded === `panel${i+1}` ? "1.0" : "0.0", transition: "opacity 0.4s linear" }} >
            <Typography style={{margin: "0 2vw", width: "95vw", maxWidth: props._width ? props._width : "95vw"}}>
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
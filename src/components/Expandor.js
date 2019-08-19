import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Expandor extends React.Component {
    constructor(props)
    {
      super(props);
      this.state ={
        expanded: this.props.expanded ? this.rops.expanded : false
      }
    }
    handleChange = panel => {
      this.setState({...this.state, expanded : this.state.expanded !== panel ? panel : false})
    };
    render(){
      if(!this.props || !this.props.children || this.props.children.length < 1) {return <div/>}
      let b = (x,i) => {
          return(
          <ExpansionPanel expanded={this.state.expanded === `panel${i+1}`} onChange={()=>this.handleChange(`panel${i+1}`)} style={{margin: "0 1.75%", width: "95vw", maxWidth: this.props._width ? this.props._width : "95vw"}}>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              >
              <Typography >{x.props.children && x.props.children.length > 0 && this.state.expanded !== `panel${i+1}` ? x.props.children[0] : <div style={{marginRight: "2vw"}}/>}</Typography>
              <Typography style={{marginLeft: this.state.expanded !== `panel${i+1}` ? "50px" : "0", fontSize: "0.8rem", lineHeight: "1.5rem", fontWeight: "300", transition: "margin 0.3s linear"}} >{x.props.children && x.props.children.length > 1 ? x.props.children[1] : ""}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{opacity: this.state.expanded === `panel${i+1}` ? "1.0" : "0.0", transition: "opacity 0.4s linear" }} >
              <Typography style={{margin: "0 2vw", width: "95vw", maxWidth: this.props._width ? this.props._width : "95vw"}}>
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
              return this.props.children.map(b)
          }
          catch { return b(this.props.children, 1)}
      }
      return (
        <div>
          {a()}
        </div>
        
      );
    }
  }
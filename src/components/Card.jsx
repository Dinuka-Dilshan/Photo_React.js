import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        marginTop: "1rem",
        marginBottom: "1rem",
        backgroundColor: "white",
      }}
    >
      <div style={{ padding: "0.5rem" , display:'flex'}}>
        <img src={props.image} alt="" style={{borderRadius:'50%',width:'2.8rem',height:'2.8rem',border:'2px solid #2196f3', objectFit:'cover'}}/>
        <div style={{paddingLeft:'0.6rem',fontWeight:'600',display:'flex',alignItems:'center'}}>{props.name}</div>
      </div>
      <img
        src={props.image}
        alt=""
        style={{margin:'0',width:'100%'}}
      />
      <div style={{ borderTop: "1px solid #e0e0e0", display: "flex" }}>
        <div
          style={{
            width: "33.33%",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Button style={{ width: "100%",padding:'0.6rem' }}><ThumbUpIcon/></Button>
        </div>
        <div
          style={{
            width: "33.33%",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Button style={{ width: "100%",padding:'0.6rem' }}><ModeCommentIcon/></Button>
        </div>
        <div style={{ width: "33.33%" }}>
         
          <Button style={{ width: "100%",padding:'0.6rem' }}><ScreenShareIcon/></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

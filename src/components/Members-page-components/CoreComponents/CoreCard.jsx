import React from 'react'
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";


export default function CoreCard(props) {
    return (
        <div >
            <div className="card bg-transparent core-card" >
                <img className="card-img-top" src={props.imgUrl} alt="CardImageCap" />
                {/* <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.post}</p>
                    <a className="icon" href={props.fb}><FacebookIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>
                    <a className="icon" href={props.insta}><InstagramIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>
                    <a className="icon" href={props.linkdin}><LinkedInIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>

                </div> */}
            </div>
        </div>
    )
}

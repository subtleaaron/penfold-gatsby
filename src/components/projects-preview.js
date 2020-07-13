import React from "react";
import {Link} from 'gatsby';
import Img from 'gatsby-image';

const ProjectPreview = ({title,slug,description, imageData}) => (

    <div className="project-preview">
        <Link to={`/${slug}/`}>
           <div className="project-preview-image">
           <Img  style={{width:"100%", height:"100%"}}fluid={imageData}  alt={title}/>
           </div>
            </Link>
            <h2>
                <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <p>
            <Link to={`/${slug}/`}>View more</Link>
            </p>
    </div>
)

export default ProjectPreview;
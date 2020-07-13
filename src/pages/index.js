import React from "react";
import "../styles/style.scss";
import {graphql, useStaticQuery} from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
// import Banner from '../components/banner';
import ProjectPreview from '../components/projects-preview';

export default () => {

  const data = useStaticQuery(graphql`
  
  {
    allProjectsJson{
      edges{
        node{
          title
          slug
          url
          description
          image{
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  
  
  `);

  const projects = data.allProjectsJson.edges;
  console.log(projects)
  return (
 
  <Layout>

    <Header/>

    <div className="projects-preview-container container">
      
    {projects.map(({ node: project }) =>{
      const title = project.title;
      const description = project.description;
      const slug = project.slug;
      const imageData = project.image.childImageSharp.fluid;
      return (

        <ProjectPreview
        title={title}
        description={description}
        imageData={imageData}
        slug={slug}
       />
   
      );

    })} </div>
    

  </Layout>
);
}

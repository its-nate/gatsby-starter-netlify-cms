// import React from "react";
// import { kebabCase } from "lodash";
// import Helmet from "react-helmet";
// import { Link, graphql } from "gatsby";
// import Layout from "../../components/Layout";

// const AuthorPage = ({ author, description }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Author | ${author}`} />
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1"
//             style={{ marginBottom: "6rem" }}
//           >
//             <h1 className="title is-size-2 is-bold-light">`${author}'s Posts'`</h1>
//             <ul className="taglist">
//               {group.map((description) => (
//                 <li>
//                   <p>{description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default AuthorPage;

// export const pageQuery = graphql`
//     query blogPostsByAuthor {
//     allMarkdownRemark(
//         filter: { frontmatter: { author: { eq: "Nate" } } }
//     ) {
//         edges {
//         node {
//             frontmatter {
//             author
//             description
//             }
//             id
//         }
//         }
//     }
//     }
// `;

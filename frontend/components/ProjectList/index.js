/* components/ProjectList/index.js */
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { CardText, CardTitle, Col, Row } from "reactstrap";

const ProjectList = (
  { data: { loading, error, projects }, search },
  req
) => {
  if (error) return "Error loading projects";
  //if projects are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (projects && projects.length) {
    const searchQuery = projects.filter( query => query.name.toLowerCase().includes(search) );
    if (searchQuery.length != 0) {
      return (
        <div>
          {searchQuery.map(res => (
            <div>{res.name}</div>
          ))}
        </div>
      );
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
    projects {
      id
      name
    }
  }
`;
// ProjectList.getInitialProps = async ({ req }) => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ProjectList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(ProjectList);
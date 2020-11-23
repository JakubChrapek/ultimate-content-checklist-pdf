import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  margin: 128px 0 0 42px;
  font-family: Poppins;
  font-size: 62px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #171717;
`;

const AllInTitle = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				allInTitle
			}
		}
`);

	return (
		<Div>
			{data.cms.allInTitle}
		</Div>
	);
};

export default AllInTitle;
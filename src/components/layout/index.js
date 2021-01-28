import React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Location } from '@reach/router'
import { Global, css } from '@emotion/react'

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 3rem;
`

const SEO = ({ title, description }) => {
  return (
    <Location>
      {({ location }) => (
        <Helmet
          title={title}
          defaultTitle="Writey Drawey"
          titleTemplate={`%s | Writey Drawey`}
          meta={[
            {
              property: `og:site_name`,
              content: 'Writey Drawey',
            },
            {
              property: `og:type`,
              content: 'website',
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:url`,
              content: `https://writeydrawey.com${location.pathname}`,
            },
            {
              property: `og:description`,
              content: description,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:card`,
              content: 'summary_large_image',
            },
            {
              name: 'description',
              content: description,
            },
          ]}
        />
      )}
    </Location>
  )
}

const Layout = ({ children, description, title }) => (
  <>
    <SEO title={title} description={description} />
    <Global
      styles={css`
        :root {
          font-size: 18px;
        }

        body {
          font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont',
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
          background: rgb(226, 226, 225);
          color: #303030;
          font-size: 1rem;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <main>{children}</main>
    <Footer>
      &copy; 2021 <a href="https://kevee.net">Kevin Miller</a>
    </Footer>
  </>
)

export default Layout

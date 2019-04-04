import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import Icon from "../images/under-construction.svg";

const IndexPage = () => (
  <Layout style={{ display: 'flex' }}>
    <h2>Pardon the Dust...Currently Under Construction</h2>
    <Icon style={{ maxWidth: '300px', marginBottom: '1.45rem', height: 'auto' }} />
  </Layout>
)

export default IndexPage

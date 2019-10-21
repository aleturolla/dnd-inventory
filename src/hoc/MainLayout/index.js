import React, { Component } from 'react'
import { Layout } from 'antd'

// import Header from 'Components/Header'
import Footer from 'Components/Footer'
import { PaddedContent } from './styled'

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        {/* <Header /> */}
        <PaddedContent>{this.props.children}</PaddedContent>
        <Footer />
      </Layout>
    )
  }
}
export default MainLayout

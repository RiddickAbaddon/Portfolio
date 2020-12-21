import { fetchCollection } from 'actions/api'
import FilterPanel from 'components/organisms/FilterPanel/FilterPanel'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class Panel extends React.Component {
   componentDidMount() {
      const { fetchRealizations, fetchCategories, fetchTechnologies, fetchPhrases } = this.props
      fetchPhrases()
      fetchRealizations()
      fetchCategories()
      fetchTechnologies()
   }

   render() {
      return <FilterPanel />
   }
}

Panel.propTypes = {
   fetchRealizations: PropTypes.func.isRequired,
   fetchCategories: PropTypes.func.isRequired,
   fetchTechnologies: PropTypes.func.isRequired,
   fetchPhrases: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
   fetchRealizations: () => dispatch(fetchCollection('realizations')),
   fetchCategories: () => dispatch(fetchCollection('categories')),
   fetchTechnologies: () => dispatch(fetchCollection('technologies')),
   fetchPhrases: () => dispatch(fetchCollection('phrases')),
})

export default connect(null, mapDispatchToProps)(Panel)

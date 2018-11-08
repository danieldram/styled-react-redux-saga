import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {update} from 'actions'
import {SomeComponent} from"components"
import {Button} from "styled"
import PropTypes from "prop-types"
import * as t from "types"

class Example extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        const {update} = this.props
        const {description} = this.props.assets
        return (
            <Fragment>
                <SomeComponent content={description} />
                <Button onClick={update}>Hello</Button>
            </Fragment>
        )
    }
}


const mapStateToProps = ({assets}, ownProps) => ({assets})
const mapDispatchToProps = (dispatch, ownProps) => ({
  update: () => dispatch(update({type: t.UPDATE_ASSET_DESC, payload:{ description:'Updated Asset' }} ))
})

Example.propTypes = {
    assets: PropTypes.shape({
        description: PropTypes.string
    })
}

export const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)



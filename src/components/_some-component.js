import React, {Fragment} from "react"

export const SomeComponent = (props) =>{
    console.log(props)
    const {content} = props
    return (
        <Fragment>
            <p>{content}</p>
        </Fragment>
    )
}
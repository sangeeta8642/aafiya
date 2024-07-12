import React from 'react'
import "../CSS files/SubComp.css"

export default function SubComp({title}) {
  return (
    <section  className='SubComp' id={title} >
      <div className="div1">
      <h2>{title}<span className='dot'>.</span></h2>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed est aliquam, pulvinar nibh vel,</p> */}
      <p>Quisque ac auctor odio, ut condimentum neque. In sed egestas est. Praesent lobortis lectus eros, vel tempor dolor congue a. Nunc pellentesque eros sed nunc suscipit consequat. Suspendisse tincidunt ornare diam ut consectetur. Nam varius pretium magna quis ultricies. Duis porta urna tempus mi euismod porttitor. Pellentesque et blandit magna, dapibus euismod velit. Mauris pharetra eget sem ut euismod.</p>
      <p>Quisque ac auctor odio, ut condimentum neque. In sed egestas est.</p>
      <ul>
        <li>the BMI(body mass index)is 40 or more </li>
        <li>your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure </li>
        <li>You are willing to make permanent changes in the lifestyle</li>

      </ul>
      </div>
      <div className="div2">
        
      </div>
    </section>
  )
}

import React from 'react'
import Container from '../container/container.component'
import './title.styles.css'

const Title = ({children,centerTitle}) =>(
    
                            <h1 className={`section-title ${centerTitle ? 'section-title-center':''}`}>
                    
                                    {children}

                             </h1>
          
    
);
export default Title;
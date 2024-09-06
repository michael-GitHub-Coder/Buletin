import React from 'react'
import { Body } from './body'
import LatestNews from './LatestNews'
import EditorsPick from './EditorsPick'
import { Subscribe } from './Subscribe'

const HomePage = () => {
  return (
    <div>
        <Body />
        <LatestNews />
        <EditorsPick />
        <Subscribe />
    </div>
  )
}

export default HomePage
# What is Temperature Converter App

This app can convert the temperature in both Celcius as input to Farenheit and Farenheit as input to Celcius.

# How to use

1. Open this [link](https://a2c-temperature-convertor.vercel.app/).
2. Input the number you want to convert.
3. See the converted results.

# For Developers

## Tec Stack

Language: Typescript, Javascript, CSS

Framework: Next.js, Tailwind CSS

## How to build

1. `git clone https://github.com/atzzCokeK/temperature-convertor.git`
2. `npm i`
3. `npm run dev`

# What I thought to develop this app

## Language

I selected Typescript to develop. I am sure that typed programming is very useful and better at any scale, even if an app is small.
In my experience, I mainly used Elm which is pure-functional programming language.

## Framework

### Next.js

Why I selected Next.js is that it seems very easy and fast to develop. I think it is appropriate for this kind of light app. Especially, I like the point that it doesn't need many configs to build and deploy. And also I have never used Next.js, so this is the very nice opportunity to learn something new.

### Tailwind-css

I mostly used css and scss. But in my team, it is getting hard to maintain solid design in the product. Tailwind-css is easy to implement and use. Negative point is that class name is often too long though.

# Design

This test is to make an app that converts input in Celcius to Farenheit. However, I think it is better to convert it also it in Farenheit to Celcius. I try to make my app easy to know both of them are available.

# How I implement light/dark mode

- I make the custom hook(useDarkMode.ts) to handle the state(light or dark).
- I use local-storage to read when this app is initialized, and also set the current state when it's toggled.

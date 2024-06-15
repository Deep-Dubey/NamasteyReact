# React Course
# Vite is a bundler which bundled our code ready for production
# We will use Percel Bundler
# 2 type of dependency
#   1. Dev Dependency (only for development) -D
#   2. Dependency (for production)
# (^)carret:- minor update.
# (~)tilde:- patch update.
# Create git ignore file and put node modules because we don't need node_modules in out production
# To run parcel we will do (npx parcelindex.html)
# HMR - Hot Module Replacement in Parcel to auto refresh
# BrowserList support to browser for there old version
# Eg:- 
# "browserslist": [
    #   "last 2 Chrome versions",
    #   "last 2 Firefox versions",
    #   "last 2 Safari versions",
    #   "last 2 Edge versions",
]
# We can give any version number
# JSX is behind the sean converted to react element
# React.createElement is used to create react element
# React.createElement => ReactElement(JS Object) => HTMLElement(render)
# JSX = > React.createElement => ReactElement(JS Object) => HTMLElement(render)
# Component Composition putting one component into another component
# We can call a component inside a curly braces like
    # {Title()}
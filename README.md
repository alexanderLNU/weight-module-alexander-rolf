# Weight Module by Alexander Rolf

## Introduction to the module

Weight Module - Alexander Rolf is a module developed in 100% Javascript which is used to convert different weight-units and to manage them in a WeightManager. This is the first version of the module and may be developed further in the future to be even more useful for developers when wanting to convert and manage different units of weights.

## Installation

**Please note that you cannot use an older version of Node than 14.**
Please check your version of Node.js in your terminal.

```bash
node -v
```

The module uses ES-modules and you will be needing version 14 or newer of Node.
**To install the module simply open a new Terminal-window and enter:**

```bash
npm install weight-module-alexander-rolf
```

## Using the module

To use my Weight Module it is required that you import the classes to start start using it:

**Import the modules classes, funtions and the object with the following import statement:**

```bash
import { Weight, WeightManager, convertUnit, unitValidator, weightUnits } from 'weight-module-alexander-rolf
```

Now you can do different things with my module and I will showcase different use cases for it below. I will start with some practical examples of the Weight-class, followed by the WeightManager-class. These are just some examples so that you can try the module quick and easy, to find more detailed documentation of the classes and the methods you can look at the section below named "Classes and their methods". There is a lot you can do with the weights in this module, for example adding, subtracting, multiplying and dividing but I won't be showing all of this in this section. Therefor I recommend that you read the "Classes and their methods" section and experiment further!

**Creating a weight:**

```bash
const yourCreatedWeight = new Weight(10, 'kg')
```

This will create a new instance of weight which translates to 10 kilograms.

Here is an example of how you would convert that into grams.

**Converting a weight:**

```bash
const yourConvertedWeight = yourCreatedWeight.convert('g')
```

This will then convert your 10 kilograms into 10000 grams.

**An example of mulitplying a weight**

**An example of comparing weights:**

**Using WeightManager**

**An example of Weightmanager**

.........

## Classes and their Methods

## Running the tests

**NOTE:** You will need npm and Node.js, as well as Jest as a devdependency.

Follow the steps below in order to run the tests:

**Step 1:** Clone the repository

```bash
git clone https://github.com/alexanderLNU/weight-module-alexander-rolf.git
```

**Step 2:** Correct path

```bash
cd weight-module-alexander-rolf
```

**Step 3:** Install

```bash
npm install
```

**Step 4:** Run

```bash
npm test
```

## License for the code

This project uses the MIT-license and can be found in the LICENCE file.

## Closing words

Thanks for checking out my module! I had a lot of fun making this and I hope it will be useful for someone even though it is not very complex!

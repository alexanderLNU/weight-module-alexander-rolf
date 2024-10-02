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
Here you can see an example of how you could multiply a weight by any number of times. Let's say we want to multiply our weight by 3:

```bash
const yourCreatedWeight = new Weight(3, 'kg')                  // Create a weight.
const yourMultipliedWeight = yourCreatedWeight.multiply(3)     // Multiply the weight using the multiply method.
console.log(yourMultipliedWeight.toString())                   // Will give the output of "9 kg".
```

**An example of comparing weights:**
You can for example see if a weight is lighter than another weight. To do that you can use the isLighterThan method:

```bash
if (yourCreatedWeight.isLighterThan(yourOtherWeight))
```

In the example above you check if yourCreatedWeight is lighter than yourOtherWeight. The same goes for isHeavierThan-method.

**Using WeightManager**
The WeightManager allows for you to handle multiple weights, you can see it as a collection where you can put the wights and manage/handle them. Here is how it is made:

```bash
const yourCreatedManager = new WeightManager()
```

Here you can use the addWeight method to add it to the manager, and maybe you want to get the lightest weight? See below for a demonstration:

```bash
yourCreatedManager.addWeight(weight1)
yourCreatedManager.addWeight(weight2)
yourCreatedManager.addWeight(weight3)
yourCreatedManager.addWeight(weight4)
const yourLightestWeight = yourCreatedManager.getLightestWeight()
```

You can then simply console.log the 'yourLightestWeight' variable and be presented with the lightest one out of your four weights from the example above.

---

I hope you found these examples useful and please check out the next section for more detailed classes and methods!

.........

## Classes and their Methods

## Class #1 - Weight

The first class present in the module is the 'Weight'-class and it is presented below with its methods. With the methods you can do a lot of different things e.g convert, manipulate and create weights.

**The Class Name:**

Weight

**Parameters:**

- weight (number) - Represents the weight and has to be a number.
- weightUnit (string) - Represents the unit of the weight e.g 'g' or 'lb'
- Throws error if the parameters are invalid. E.g weight is not a valid number och weightUnit is not a valid unit of weight.

## Class #2 - WeightManager

## Methods for Class #1 - Weight

**(1.)** convert(newWeightUnit) - This method simply converts a weight to a new unit.

**Parameters:** newWeightUnit (string) - This is the new unit that we want to convert our weight into.
**What it returns:** It resturns the converted weight in a new instance of Weight.

- Throws error if the parameter newWeightUnit is not a valid unit of weight.

---

**(2.)** add(otherWeight) - This method adds a weight to your weight.

**Parameters:** otherWeight(Weight) - The other weight that you are adding.
**What it returns:** Total weight in a new instance of Weight.

- Throws error if the parameter otherWeight is not a valid instance of Weight.

---

**(3.)** subtract(otherWeight) - This method subtracts another weight from your weight.

**Parameters:** otherWeight(Weight) - The other weight that you are subtracting.
**What it returns:** A new instance of weight with the subtracted weuight value.

- Throws error if the parameter otherWeight is not a valid instance of Weight.

## Methods for Class #2 - WeightManager

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

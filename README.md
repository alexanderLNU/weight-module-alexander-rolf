# Weight Module by Alexander Rolf

## Introduction to the module

Weight Module - Alexander Rolf is a module developed in 100% Javascript which is used to convert different weight-units and to manage them in a WeightCollection. This is the first version of the module and may be developed further in the future to be even more useful for developers when wanting to convert and manage different units of weights.

## Installation

**Please note that you cannot use an older version of Node than 14.**
Please check your version of Node.js in your terminal.

```bash
node -v
```

The module uses ES-modules and you will be needing version 14 or newer of Node.
**To install the module simply open a new Terminal-window and enter:**

```bash
npm install weight-module-alexander-rolf@latest
```

## Using the module

To use my Weight Module it is required that you import the classes to start start using it:

**Import the modules classes, funtions and the object with the following import statement:**

```bash
import { Weight, WeightCollection, convertUnit, unitValidator, weightUnits } from 'weight-module-alexander-rolf
```

Now you can do different things with my module and I will showcase different use cases for it below. I will start with some practical examples of the Weight-class, followed by the WeightCollection-class. These are just some examples so that you can try the module quick and easy, to find more detailed documentation of the classes and the methods you can look at the section below named "Classes and their methods". There is a lot you can do with the weights in this module, for example adding, subtracting, multiplying and dividing but I won't be showing all of this in this section. Therefor I recommend that you read the "Classes and their methods" section and experiment further!

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

**Using WeightCollection**
The WeightCollection allows for you to handle multiple weights, you can see it as a collection where you can put the wights and manage/handle them. Here is how it is made:

```bash
const yourCreatedManager = new WeightCollection()
```

Here you can use the addWeight method to add it to the collection, and maybe you want to get the lightest weight? See below for a demonstration:

```bash
yourCreatedCollection.addWeight(weight1)
yourCreatedCollection.addWeight(weight2)
yourCreatedCollection.addWeight(weight3)
yourCreatedCollection.addWeight(weight4)
const yourLightestWeight = yourCreatedCollection.getLightestWeight()
```

You can then simply console.log the 'yourLightestWeight' variable and be presented with the lightest one out of your four weights from the example above.

---

I hope you found these examples useful and please check out the next section for more detailed classes and methods!

## Classes and their Methods

## Class #1 - Weight

The first class present in the module is the `Weight`-class and it is presented below with its methods. With the methods you can do a lot of different things e.g convert, manipulate and create weights.

**The Class Name:**

`Weight`

**Parameters:**

- `weight (number)` - Represents the weight and has to be a number.
- `weightUnit (string)` - Represents the unit of the weight e.g 'g' or 'lb'
- `Throws error` if the parameters are invalid. E.g weight is not a valid number och weightUnit is not a valid unit of weight.

## Class #2 - WeightCollection

The second class present in the module is the `WeightCollection`-class which works as like a manager for a collection of different instances of `Weight`. Further down the page you can explore more about what these methods can do!

**The Class Name:**

`WeightCollection`
**Returns:** A new `WeightCollection` instance.

## Methods for Class #1 - Weight

**(1.)** `convert(newWeightUnit) ` - This method simply converts a weight to a new unit.

**Parameters:** `newWeightUnit (string)` - This is the new unit that we want to convert our weight into.
**What it returns:** It resturns the converted weight in a new instance of Weight.

- `Throws error` if the parameter newWeightUnit is not a valid unit of weight.

---

**(2.)** `add(otherWeight)` - This method adds a weight to your weight.

**Parameters:** `otherWeight(Weight)` - The other weight that you are adding.
**What it returns:** Total weight in a new instance of Weight.

- `Throws error` if the parameter otherWeight is not a valid instance of Weight.

---

**(3.)** `subtract(otherWeight)` - This method subtracts another weight from your weight.

**Parameters:** `otherWeight(Weight)` - The other weight that you are subtracting.
**What it returns:** A new instance of weight with the subtracted weuight value.

- `Throws error` if the parameter otherWeight is not a valid instance of Weight.

---

**(4.)** `toString()` - This method returns a string with the weight and the weightunit.

**What it returns:** Method returns a string where the weight comes first followed by the unit. E.g "5 kg"

---

**(5.)** `divide(number)` - This method divides the weight.

**Parameters:** `number (number)` - The number to divide with.
**What it returns:** A new instance of weight with the divided wuight value.

- `Throws error` if the parameter is 0 or invalid.

---

**(6.)** `multiply(number)` - This method multiplies the weight.

**Parameters:** `number (number)` - The number to mulitply with.
**What it returns:** A new instance of weight with the multiplied weight value.

- `Throws error` if the parameter is invalid.

---

**(7.)** `isLighterThan(otherWeight)` - This method compares if your weight is lighter than the other weight you are comparing it with.

**Parameters:** `otherWeight (Weight)` - Weight that will be compared.
**What it returns:** Returns a `boolean`. True if this weight is lighter, false if not.

- `Throws error` if the parameter otherWeight is not a valid instance of Weight.

---

**(8.)** `hasSameWeightAs(otherWeight)` - This method checks if your weight is equal to another weight of your choosing.

**Parameters:** `otherWeight (Weight)` - Weight that will be compared.
**What it returns:** Returns a `boolean`. True if this weight is equal, false if not.

- `Throws error` if the parameter otherWeight is not a valid instance of Weight.

---

**(9.)** `isHeavierThan(otherWeight)` - This method compares if your weight is heavier than the other weight you are comparing it with.

**Parameters:** `otherWeight (Weight)` - Weight that will be compared.
**What it returns:** Returns a `boolean`. True if this weight is heavier, false if not.

- `Throws error` if the parameter otherWeight is not a valid instance of Weight.

---

**(10.)** `fromTextInput(userInput)` - This method parses a string from e.g a user and creates a new instance of Weight. E.g "5 kg".

**Parameters:** `userInput (string)` - The string that will be parsed.
**What it returns:** A new instance of weight.

- `Throws error` if either the unit is not valid or the format of the input is invalid.

---

## Methods for Class #2 - WeightCollection

**(1.)** `removeWeight(weight)` - This method removes a instance of weight from the collection.

**Parameters:** `weight (Weight)` - Weight that you want to remove.
**What it returns:** Returns a boolean. True if removed, false if not.

---

**(2.)** `addWeight(weight)` - This method adds a instance of weight to the collection.

**Parameters:** `weight (Weight)` - Weight that you want to add.

- `Throws error` if the parameter weight is not a valid instance of Weight.

---

**(3.)** `numberOfWeights()` - Gets you the number of weights in the collection.

**What it returns:** The actual number/count of weights that are in the collection.

---

**(4.)** `getTotalWeight(weightUnit = 'g')` - Sums up and calculate total weight in specified unit, grams by default.

**Parameters:** `weightUnit (string)` - The weight unit that you want thew total weight in.
**What it returns:** A new instance of weight with the total weight and specified unit.

- `Throws error` if the parameter is a invalid unit.

---

**(5.)** `getAverageWeight(weightUnit = 'g')` - Gets you the average weight in the unit you specifiy, grams by default.

**What it returns:** A new instance of weight with average weight.

- `Throws error` if there are no weights in the collection or if the parameter is a invalid unit.

---

**(6.)** `getHeaviestWeight()` - This method returns the heaviest instance of Weight in the collection.

**What it returns:** The instance of weight that is the heaviest.

- `Throws error` if there are no weights in the collection.

---

**(7.)** `getLightestWeight()` - This method returns the lightest instance of Weight in the collection.

**What it returns:** The instance of weight that is the lightest.

- `Throws error` if there are no weights in the collection.

---

**(8.)** `mergeManagersData(otherWeightCollection)` - This method merges the weights in the other instance WeightCollection to this instance of WeightCollection.

**Parameters:** `otherWeightCollection (WeightCollection)` - Another instance of WeightCollection that contains the weights you want to merge.

- `Throws error` if `otherWeightCollection` is not a instance of WeightCollection.

---

**(9.)** `eraseAllWeights()` - This method erases all the weights in the collection.

---

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

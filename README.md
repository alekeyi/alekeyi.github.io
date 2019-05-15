# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

## Idea: Gamayun

• App centered around harm reduction and information on common recreational drugs.
• Displays pertinent information such as toxicity levels (taking the user's input
   weight as reference point, kg or lbs), interactions with other recreational
   drugs, side-effects, duration of effects, and potential long-term dangers
• With Disclaimer: Does not take into account individual medical conditions,
   contraindications/interactions with non-app drugs, or exhaustive list of
   possible side-effects

## The Players

 - User
   - Profile
     -age
     -weight
     -(gender?)
     -region (for legality information)
   - Drug tracking (OPTIONAL)
     -Array of drugs currently being 'tracked' by user (ie. currently in user's system)
     -Dosage

 - Drug
   - Toxicity profile (referencing user's weight, age, possibly gender)
     - Lethal dose
     - Dependence potential
     - Management of use (suggestions on what to do, what to avoid, to maximize safety)
     - Advice on general treatment of overdose
   - Effects
     - Duration of dose (possible scaling of dosage with reference to user input)
     - Physical effects
     - Common side effects and adverse reactions
     - Contraindication with other tracked drugs
   - Legality (in brief)
     - referencing specifically user's region/state
   - Link to outside resources and readings
   - Interactions with other drugs in database
     - Dangerous interactions with drugs being tracked by user

 - Interactions
   - Display of all drugs currently tracked
   - Contraindications/dangerous combinations among drugs highlighted
     - Assessment of potential combined toxicity/overdose

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...
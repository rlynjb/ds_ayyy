export const badbeesh = {
  title: 'Habit Tracker',
  subtitle: 'Vue3, TailwindCSS, DaisyUI, Netlify, Static Site',
  link: '/',
  image_thumb: 'portfolio_thumbs',
  notes: `
    <section>
      <h3>Problem Definition</h3>
      <p>An app that tracks daily self-care routine such as Food calorie intake, workouts, face/skin care routine. These are the basic features, but we would want to expand the app with a lookbook/clothing idea generator. This feature will give you an idea what to wear for the day (if you don’t feel like making decisions). It will have a color shirt/pants/socks/shoes combination generator. That’s pretty much the gist of the feature.</p>
    </section>

    <section>
      <h3>Requirements</h3>
      <ul>
        <li>R1. It’s going to have 3 categories (Food/calorie intake, workouts, skin care routine).</li>
        <li>R2. Users are able to track daily food/calories intake.</li>
        <li>R3. Users are able to track daily workouts.</li>
        <li>R4. Users are able to track daily skin care routine.</li>
        <li>R5. Users are able to view previous “tracked items” in X days.</li>
        <li>R6. Users are able to view how many calories they consumed throughout the day.</li>
        <li>R7. The system should remember what previous items the User entered. Making entering data for Users intuitive.</li>
        <li>R8. Users should be able to create an account or login.</li>
        <li>R9. Users are only able to view 60 days of previous data or history.</li>
      </ul>
    </section>

    <section>
      <h3>Guess a “Design approach” and “Design Pattern”</h3>
      <p>I’ll approach it bottom-up. Focusing and building its small components first.
      Design pattern is unknown yet. It’s difficult for me to guess. I’ll need to familiarize myself with different design patterns.
      </p>
    </section>

    <section>
      <h3>Determine Actors (Primary, Secondary) and its Use Cases.</h3>

      <div class="subnote">
        <div class="notecol">
          <h4>Customer (Primary)</h4>
          <ul>
            <li>
              Able to Create an account
            </li>
            <li>
              Able to Login/Logout
            </li>
            <li>
              View all 3 categories in one page.
            </li>
            <li>
              Add/edit/delete daily items in Food/Calorie intake.
            </li>
            <li>
              Add/edit/delete daily items in Workout.
            </li>
            <li>
              Add/edit/delete daily items in the Skin-Care routine.
            </li>
            <li>
              View X days of previous items
            </li>
            <li>
              View how many calories consumed in the Food/Calorie intake section.
            </li>
          </ul>
        </div>

        <div class="notecol">
          <h4>System (Secondary)</h4>
          <ul>
            <li>
              Store Food/Calorie items and its fields with timestamp in DB.
            </li>
            <li>
              Store Workout items and its fields with timestamp in DB.
            </li>
            <li>
              Store Skin-Care routine items and its fields with timestamp in DB.
            </li>
            <li>
              Check if an item (with its fields) already exists in DB and auto-completes entry.
            </li>
            <li>
              Check if the user is registered, if not, automatically create a new account.            
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  images: [
    'badbeesh_usecase_diagram.png',
    'badbeesh_class_diagram.png'
  ]
}
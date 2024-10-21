import React from "react";

function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Weather Chat App</h3>
            <p>
              The Weather Chat App is an interactive tool that provides
              real-time weather updates through a user-friendly chat interface.
              Users can ask for current weather conditions for any location
              worldwide. The app integrates with reliable weather APIs to
              deliver accurate information in a conversational format, making it
              easy for users to get the data they need on the go.
              <a
                href="https://alphamuhia.github.io/wether-chart/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-0.1 px-2 rounded hover:bg-gray-600 transition"
              >
                link
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Recipe Book App</h3>
            <p>
              A user-friendly recipe book app that allows users to easily
              browse, save, and organize their favorite recipes.This project
              features a searchable recipe database, personalized recipe
              collections, and step-by-step cooking instructions. Whether you're
              a beginner or a seasoned chef, this app helps you discover and
              manage recipes with ease.
              <a
                href="https://alphamuhia.github.io/Recipe-book/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-0.1 px-2 rounded hover:bg-gray-600 transition"
              >
                link
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Rock, Paper, Scissors Game
            </h3>
            <p>
              This is a fun and interactive implementation of the classic Rock,
              Paper, Scissors game. Built using [mention the language/technology
              used, e.g., JavaScript, Python], the game allows players to
              compete against the computer, testing their luck and strategy. The
              logic behind the game ensures random and fair outcomes, and the
              user interface is simple and intuitive. It’s a great demonstration
              of basic game logic, user interaction, and programming concepts.
              <a
                href="https://alphamuhia.github.io/game/game.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-0.1 px-2 rounded hover:bg-gray-600 transition"
              >
                link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

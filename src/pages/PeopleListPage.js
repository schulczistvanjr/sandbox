import React from "react";
import { PeopleList } from "../PeopleList";

export const people = [{
    id: 1,
    name: 'John',
    age: 35,
    hairColor: 'brown',
  }, {
    id: 2,
    name: 'John2',
    age: 335,
    hairColor: 'bbrown',
  }, {
    id: 3,
    name: 'John3',
    age: 33,
    hairColor: 'yellow',
  }, {
    id: 4,
    name: 'John4',
    age: 3,
    hairColor: 'green',
  }];

  export const PeopleListPage = () => {
      return(
        <>
            <h1>The People List Page</h1>
            <PeopleList people={people} />
        </>
      );
  }
'use client'
import { useEffect } from "react";

{/* Task: Write a functiona called same, which accepts two arrays. The function should return true if every value in the array has 
                it's corresponding value squared in the second array. The frequency of values must be the same.
*/}

export const Tasks = () => {
            // console.log(same([1,2,3], [4,1,9]));
        // console.log(same([1,2,3], [1,9]));
        // console.log(same([1,2,4], [4,4,1]));
    const same = (originalValues: number[], squaredValues: number[]) => {
        if(originalValues.length !== squaredValues.length) {
            return false;
        }
        const originalValuesSquared = originalValues.map(val => val * val).sort()
        const newSquaredValues = squaredValues.sort()

        for (let i = 0; i < originalValuesSquared.length; i++) {
            if (originalValuesSquared[i] !== newSquaredValues[i]) {
                return false;
            }
        }
        return true;
    }

    // Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
    // validAnagram('', '') // true
        // console.log(validAnagram('aaz', 'zza')) // false
        // console.log(validAnagram('anagram', 'nagaram')) // true
        // console.log(validAnagram("rat","car")) // false) // false
        // console.log(validAnagram('awesome', 'awesom')) // false
        // console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
        // console.log(validAnagram('qwerty', 'qeywrt')) // true
        // console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
    const validAnagram = (string1: string, string2: string) => {
        // Jeigu string1 ir string2 length neatitinka tai auto fail.
        if(string1.length !== string2.length) {
            return false;
        }
        // Pavadinimai neatitinka.
        const firstArray = string1.split('').sort().join('');
        const secondArray = string2.split('').sort().join('');

        if(firstArray !== secondArray) {
            return false;
        }

        return true;
    }

    // Count string letters for a string and return a value like this { a: 1, b: 2 } etc.
            // countLetter('abbc')
    const countLetter = (string1: string) => {
        let lookup: { [key: string]: number } = {};

        string1.split('').forEach((letter) => {
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        })

        return lookup;
    }

    const countUniqueValues = (notUniqueValues: number[]) => {
        // Remove nonUnique values using set.
        // With Set.
        const uniqueValues = Array.from(new Set(notUniqueValues));

        // Without Set.
        // 
        console.log('uniqueValues', uniqueValues);

        let lookup = {};

    // arr.forEach((value) => {
    //     if (lookup[value]) {
    //         lookup[value] += 1;
    //     } else {
    //         lookup[value] = 1;
    //     }
    // });

    // // The number of unique values is the number of keys in the lookup object
    // return Object.keys(lookup).length;
    }
    
    // VALID WORDS SAME IF COMPARED FROM OTHER SIDE.
    // const validAnagram = (string1: string, string2: string) => {
    //     const value1 = string1.split('').reverse().join('');

    //     console.log(value1, string2);
    //     if(value1 === string2) {
    //         return true;
    //     }
    //     return false
    // }

    useEffect(() => {

        countUniqueValues([1,1,1,1,1,2]) // 2
        // countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
        // countUniqueValues([]) // 0
        // countUniqueValues([-2,-1,-1,0,1]) // 4
    })
    
    return (
        <p>This are Tasks</p>
    )
}
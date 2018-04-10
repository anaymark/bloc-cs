## Using proper pseudo-code, describe the following primitive algorithms:

### Making coffee;

```
IF instant
  FOR cup 0 to N increment
    ADD water && coffee
    IF sweet 
      ADD sweetener
    END IF
    IF cream
      ADD cream
    END IF
    IF sweet && cream
      ADD sweet && cream
    END IF
    ELSE 
      RETURN black
    END ELSE
  END FOR
END IF

ELSE IF machine
  SET cups to N
  ADD water && coffee
  SET brew to true
    FOR all cups
      IF sweet 
        ADD sweetener
      END IF
      IF cream
        ADD cream
      END IF
      IF sweet && cream
        ADD sweet && cream
      END IF
      ELSE 
        RETURN black
      END ELSE
    END FOR
END ELSE IF

ELSE
  CALL Starbucks
END ELSE

```

## Washing dishes;

```
IF hand wash
  FOR dish 0 to N increment
    ADD dish TO sink
    SET moreSoap TO 1
    SET soap && water TO false
    IF liteDirt 
      SET soap, water TO true
      RETURN dish
    END IF
    IF mediumDirt
      SET soap, water TO true
      ADD moreSoap
      RETURN dish
    END IF
    IF heavyDirt
      SET soap, water TO true
      ADD moreSoap times 2
      RETURN dish
    END IF
    ELSE 
      RETURN No dirty dishes, relax.
    END ELSE
  END FOR
END IF

ELSE IF machine
  SET dishes to N
  SET soap TO 1
  SET machineWashON TO false
  SET wash to 20

  CASE dishes OF
    N <= 10: ADD soap
             ADD wash
             SET machineWashOn TO true
    N > 10 && <20: ADD soap
                   ADD wash times 2
                   SET machineWashOn TO true
    N >= 20 && <40 ADD soap
                   ADD wash times 3
                   SET machineWashOn TO true
  ENDCASE
  SET machineWashOn TO false

ELSE
  CALL maidService
END ELSE

```


# A choice of your own.

## Example of an algorithm that calls on multiple other algorithms. 

```
CALL morningRoutine 
SET alarm off
GET out of your room
  CALL the toothbrush 
    SET toothpaste AND water to true
    GET brushing 
    SET toothpaste AND water to false
  CALL go to the bathroom
  CALL shower
    GET shower
  CALL dressing room 
    GET dressed
  CALL parking lot. 
    CALL Take your car/bike out
    SET car/bike
    START the car/bike
  CALL Drive to work/College.
```


## As with the knot algorithm, there may be more than one way to solve the problem. It is essential to try to pick the best algorithm for a situation. Name three companies who created an algorithm that made them successful, e.g., Google's search algorithm. It doesn't need to be a tech example (such as a recipe or manufacturing a product). Google's algorithm produces more relevant results than other search engines; what about each of your cases make them stand out?

* British Intelligence - Alan Turing did not belong to a consumer company but created a number of the most important algorithms that help decipher German scrambled communications and crack the Enigma code. This was a pivotal turning point in World War 2. 
* Mathematical Applications Group, Inc (Disney): Perlin Noise - Ken Perlin created an algorithm that brought realism to computer graphics. This works by imitating controlled random appearances of textures in nature and enable CGI elements that mirror the real word counterparts. This enabled developers and CGI artists to be able to create representation of immense scaled worlds in a time efficient manner. 
* LinkedIn - people you may know connection recommendation algorithm. This was so popular Facebook decided to adopt a similar implementation. This algorithm increased user’s networks, and increased data on users for the sites that love to collect data.

## Hypothesize about what constitutes an efficient algorithm versus an inefficient algorithm.

* Efficient algorithms are one's that use the least amount of resources/memory, take up the least amount of lines of code, get the task done in a finite time with all possible cases/scenarios, and do this in the shortest time possible. Moreover, an algorithm needs to take input(s), produce output(s) and be able to be generalized to other set of inputs. Lastly, the most important characteristic of a good algorithm is that it is feasible with available resources and scalable to need/growth.

* Inefficient algorithms take up more memory than needed, use many lines of code, do not cover all possible cases, and do not usually achieve this in a timely manner. Algorithms that take the brute force approach, or the approach of process of elimination, sometimes land in this category. Heuristics are the exception, since they are just efficient enough to be useful. Lastly, algorithms that do not except multiple inputs and do not scale, are not efficient.

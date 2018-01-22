# sqlbuilder
[![Build Status](https://travis-ci.org/bflemi3/sqlbuilder.svg?branch=master)](https://travis-ci.org/bflemi3/sqlbuilder)

```es6
import { Table, select, where, orderBy, orderByDesc, join, on } from 'qry';

const person = Table({ name: 'person', options });
person(
    select('field1'),
    where({ name: 'bob' }),
    orderByDesc('age', 'weight')
);
person.valueOf(); 
// select field1 from person where name = 'bob' order by age, weight desc

const place = Table({ name: 'place', options });
person(
    select('field1'),
    where({ name: 'bob' }),
    join(place, on({ person: 'placeId', place: 'id' })),
    orderBy('age')
);
person.valueOf();
// select field1 from person join place on person.placeId = place.id where name = 'bob'
```

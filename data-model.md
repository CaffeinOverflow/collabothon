# Data Models

## Entities

```py
Category = Union[Literal['General'], Literal['Plastic']]

class Bin:
    id: UUID
    lat: float
    lon: float
    neighbourhood: str
    category: Category

class CollectionEvent:
    id: UUID
    binId: UUID
    category: Category
    createdAt: datetime
    weight: float
```

## Stats

```py
class BinStats:
    id: UUID
    lat: float
    lon: float
    neighbourhood: str
    category: Category
    errorRate: float
    collectedAmount: float
```

## API

```py
POST /bin/{:binId}/collection
    params:
        binId: UUID
        weight: float
        photo: Image
    returns:
        collectionId: UUID

GET /bin/stats
    params:
        statsFrom?: datetime
    returns:
        stats: list[BinStats]
    
```
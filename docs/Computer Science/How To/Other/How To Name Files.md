# Naming Convention for React

## Casing

| Type | Convention |
|------|------------|
| File Names | camelCase |
| Component Names | PascalCase |

## File Name vs Component Name

| Type | Convention |
|------|------------|
| Pages | Standalone Components |
| Name | [ActionType][Area] (Example: CreatePageEmployee) |

## Folder Structure

- **Area**
  - app.tsx
  - routePaths.ts (Used for defining route names, e.g., /Claims/Edit/:id)
  - routes.tsx (Router)
    - **/components**
      - detailsEmployeeComponent.tsx
    - **/pages**
      - createEmployeeComponent.tsx

## Data Transfer Object (DTO)

- **Warning**: Existing code may violate these guidelines, but new code should adhere to them.

- Basic Idea: [Microsoft Docs](https://docs.microsoft.com/de-de/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5)

- Naming Convention:
  - If database entity is `Entity.cs`, the DTO will be `EntityDTO.cs`.
  - For special details use cases, requiring a lot of data, create a second DTO `EntityDetailsDTO.cs`.
  - `EntityDetailsDTO` can be derived from `EntityDTO` to remove redundancy.
  - For manipulating data, use DTOs:
    - For create action, use `EntityCreateDTO.cs`.
    - For edit action, use `EntityEditDTO.cs`.
  - `EntityEditDTO` can be derived from `EntityCreateDTO` to remove redundancy.

## Additional Details

- This naming convention is specific to React applications.
- It emphasizes consistency and clarity in file naming and folder structure.
- DTO naming conventions follow a specific pattern for different use cases.
- The provided guidelines aim to improve code organization and maintainability.

*Original post by Philipp Pähler on [Date: 9. Feb. 2021]*


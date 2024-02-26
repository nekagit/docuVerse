							100 customer db x 100 tenants 
x 100 staticFrequentOversizedMethods

1000000 cash keys
die stored man nicht sondern autogenerate on the fly
db_id_tenant_id_Method_...parameter

1 Server ? oder 3 Server
30 customer db x 50 tenants x 10 methoden
15000 cash keys

---


https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory?view=aspnetcore-8.0

https://learn.microsoft.com/de-de/aspnet/core/performance/caching/memory?view=aspnetcore-8.0

https://stackoverflow.com/questions/57215243/asp-net-cache-key-cannot-be-found

https://codereview.stackexchange.com/questions/277686/asp-net-core-cachekey-management

https://aspnetboilerplate.com/Pages/Documents/Cached-Unique-Key-Per-User

---

# In Memory Caching
https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory?view=aspnetcore-8.0

# Response Caching

https://unitcoding.com/caching-asp-net-core/?utm_content=cmp-true

# Distributed Caching
https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed?view=aspnetcore-8.0

---

### Cache Key Design:

1. **Tenant-Specific Data:**
   - For caching data related to a specific tenant, include the tenant ID in the cache key. This ensures that the cache is specific to each tenant.
     ```csharp
     string cacheKey = $"Tenant_{tenantId}_...";
     ```

2. **User-Specific Data:**
   - If caching user-specific data, include the user ID in the cache key. This ensures that the cache is specific to each user.
     ```csharp
     string cacheKey = $"User_{userId}_...";
     ```

### Cache Data Isolation:

1. **Separate Cache Instances or Regions:**
   - Use separate cache instances or regions for tenant-specific and user-specific data. This helps in maintaining isolation between different sets of cached data.

2. **Tenant-Specific Caching:**
   - Ensure that data specific to a particular tenant is cached separately from other tenants. This may involve using separate cache keys or cache regions.

### Cache Invalidation:

1. **Event-Driven Invalidation:**
   - Implement event-driven cache invalidation mechanisms. When data related to a specific tenant or user changes, trigger an event to invalidate the corresponding cache entries.

2. **Time-Based Invalidation:**
   - Set appropriate expiration times for cache entries, considering the frequency of data changes. Sliding expiration can be beneficial to refresh the cache if the data is frequently accessed.

### Security Considerations:

1. **Authorization Checks:**
   - Ensure that any cached data is subject to appropriate authorization checks. Validate the identity and permissions of the user making the request to access the cached data.

2. **Sensitive Data Handling:**
   - Be cautious about caching sensitive data. If the cached data includes sensitive information, consider appropriate encryption or obfuscation techniques.

### Monitoring and Metrics:

1. **Tenant/User-Specific Monitoring:**
   - Implement monitoring and logging at the tenant and user levels to track cache hits, misses, and evictions. This allows for targeted analysis and optimization.

2. **Performance Metrics:**
   - Regularly monitor the performance impact of caching for each tenant and user. Adjust cache configurations based on observed behavior and performance metrics.

### Example Cache Key for Tenant-Specific Data in `ArticlesController`:

```csharp
string cacheKey = $"Tenant_{tenantId}_ArticlesController_GetAll";
```

### Cache Key Naming:

1. **Resource Identifiers:**
   - Use resource identifiers in the cache key, especially if your application has a RESTful or resource-oriented architecture. For example, you might include IDs or slugs of the resources being requested.

2. **Include Action or Method Names:**
   - If you have multiple actions/methods in a controller, consider including the action or method name in the cache key to differentiate between them.

3. **Query Parameters:**
   - If the response varies based on query parameters, include them in the cache key. Be cautious with large or dynamic parameters; you might want to normalize them or hash them for a more manageable key.

4. **User Context:**
   - If the response is user-specific, consider incorporating user-specific information (like user ID) into the cache key.

5. **Be Explicit and Understandable:**
   - Make the cache key meaningful and understandable. A developer should be able to look at a cache key and quickly understand what it represents.

### What to Cache:

1. **Frequently Accessed Data:**
   - **Cache data that is frequently accessed and relatively static**. If a particular set of data is queried often and doesn't change frequently, caching can significantly improve performance.

2. **Expensive Operations:**
   - Cache the results of expensive operations or queries. If a particular operation involves complex calculations or database queries, caching can help reduce the load on your server.

3. **Static Data:**
   - If your data doesn't change often, consider caching it. This could include reference data, configuration settings, or data that is constant for a certain period.

4. **User-Specific Data:**
   - If certain data is specific to individual users and doesn't change often, you might cache it per user.




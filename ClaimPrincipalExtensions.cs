namespace HolidayProperties
{
    using System.Security.Claims;

    public static class ClaimPrincipalExtensions
    {
        public static string Id(this ClaimsPrincipal user)
            => user.FindFirst(ClaimTypes.NameIdentifier).Value;
    }
}

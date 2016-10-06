namespace web.Services
{
    using System.Collections.Generic;

    using web.Models;

    public class ItemsEqualityCompararer: IEqualityComparer<Item>
    {
        /// <summary>
        /// Determines whether the specified objects are equal.
        /// </summary>
        /// <returns>
        /// true if the specified objects are equal; otherwise, false.
        /// </returns>
        /// <param name="x">The first object of type <paramref name="T"/> to compare.</param><param name="y">The second object of type <paramref name="T"/> to compare.</param>
        public bool Equals(Item x, Item y)
        {
            if (x == null && y == null)
                return true;
            
            if (x == null || y == null)
                return false;

            return x.Id == y.Id;
        }

        /// <summary>
        /// Returns a hash code for the specified object.
        /// </summary>
        /// <returns>
        /// A hash code for the specified object.
        /// </returns>
        /// <param name="obj">The <see cref="T:System.Object"/> for which a hash code is to be returned.</param><exception cref="T:System.ArgumentNullException">The type of <paramref name="obj"/> is a reference type and <paramref name="obj"/> is null.</exception>
        public int GetHashCode(Item obj)
        {
            if (obj == null)
                return 0;

            return obj.Id;
        }
    }
}
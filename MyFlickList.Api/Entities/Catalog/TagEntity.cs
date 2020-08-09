﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyFlickList.Api.Entities.Catalog
{
    public class TagEntity
    {
        [Key]
        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; } = default!;

        public ICollection<FlickTagEntity> FlickTags { get; set; } = new List<FlickTagEntity>();
    }
}
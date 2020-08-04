﻿using System;
using System.ComponentModel.DataAnnotations;
using MyFlickList.Data.Entities.Catalog;

namespace MyFlickList.Api.Models.Catalog
{
    public class FlickResponse
    {
        [Required]
        public string Id { get; set; } = default!;

        [Required]
        public FlickKind Kind { get; set; }

        [Required]
        public string Title { get; set; } = default!;

        public DateTimeOffset? PremiereDate { get; set; }

        public TimeSpan? Runtime { get; set; }

        public int? EpisodeCount { get; set; }

        public string? Synopsis { get; set; }

        public Guid? ImageId { get; set; }
    }
}